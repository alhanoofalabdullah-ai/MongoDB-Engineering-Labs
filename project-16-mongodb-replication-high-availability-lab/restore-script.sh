#!/bin/bash

mongorestore \
--host localhost \
--port 27017 \
./backup
