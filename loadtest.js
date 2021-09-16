import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5s', target: 20 },
    { duration: '10s', target: 10 },
    { duration: '3s', target: 0 },
  ]
};

export default function () {
  let res = http.get('https://love-meter-bc9dd.web.app');
  check(res, { 'Check Respon Status': (r) => r.status === 200 });
  check(res, { 'Check Homepage': (r) => r.body.includes("Love Meter") });
  sleep(1);
}