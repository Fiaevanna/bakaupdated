#!/bin/sh
npm run preview &
nginx -g 'daemon off;'