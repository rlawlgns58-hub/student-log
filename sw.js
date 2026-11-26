// 앱 설치 조건을 맞추기 위한 최소 서비스 워커 (데이터는 저장하지 않고 그대로 네트워크로 보냄)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
