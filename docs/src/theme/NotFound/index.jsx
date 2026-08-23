import { useEffect } from 'react';

export default function NotFoundWrapper(props) {

  useEffect(() => {
    const fullPath = window.location.pathname + window.location.search + window.location.hash;
    window.location.href = "https://yukicord.github.io" + "/YukiCord/app?page=" + encodeURIComponent(fullPath);
  });

  return null;
}
