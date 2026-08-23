# --- Backend Build Stage ---
FROM mcr.microsoft.com/dotnet/sdk:9.0-alpine AS build
WORKDIR /source
COPY server/YukiCord/*.csproj ./server/YukiCord/
RUN dotnet restore ./server/YukiCord/YukiCord.csproj --runtime linux-musl-x64
COPY server/YukiCord/ ./server/YukiCord/
WORKDIR /source/server/YukiCord
RUN dotnet publish -c Release --runtime linux-musl-x64 -o /source/published /p:PublishSingleFile=false /p:CopyLocalLockFileAssemblies=true

# --- Runtime Stage ---
FROM mcr.microsoft.com/dotnet/aspnet:9.0-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN apk add --no-cache \
    libgcc libstdc++ fontconfig freetype harfbuzz \
    ttf-dejavu libgdiplus libc6-compat su-exec \
    && fc-cache -f

WORKDIR /app
COPY --from=build /source/published/ /app/
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV AppSettings__SqlitePath=/app/data/yukicord.db \
    AppSettings__SqliteCachePath=/app/data/cache.db \
    AppSettings__Host=0.0.0.0 \
    AppSettings__Port=5005 \
    AppSettings__FrontendUrl=* \
    AppSettings__DatabaseType=sqlite \
    AppSettings__RedisConnectionString=redis://localhost:6379 \
    AppSettings__RedisConnectionLimit=10

EXPOSE 5005
ENTRYPOINT ["/entrypoint.sh"]