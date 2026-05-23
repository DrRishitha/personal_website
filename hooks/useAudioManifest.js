'use client';

import { useState, useEffect } from 'react';

let cache = null;
let promise = null;

export function useAudioManifest() {
  const [manifest, setManifest] = useState(cache);

  useEffect(() => {
    if (cache) return;
    if (!promise) {
      promise = fetch('/audio/manifest.json')
        .then(r => r.ok ? r.json() : {})
        .then(data => { cache = data; return data; })
        .catch(() => { cache = {}; return {}; });
    }
    promise.then(data => setManifest(data));
  }, []);

  return manifest;
}
