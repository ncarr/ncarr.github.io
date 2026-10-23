---
title: Video Doorbell Project
pubDate: 2022-03-27
summary: Low-cost homemade video doorbell project
tags: [project]
cardImage: ../../assets/doorbell_activated.jpg
cardImageAlt: Doorbell activated and recording
blogHighlight: false
projectHighlight: true
startDate: 2020-08-01
endDate: 2020-08-01
---

Since off the shelf video doorbells are very expensive and often require a subscription to use, I tasked myself with building one with an ESP32 camera module that costs less than 25 USD. I found an existing open-source video streaming project with the same hardware and modified it to turn on when motion is detected and automatically shutoff after 30 s of inactivity to save battery. I also added support for displaying messages on the integrated display by sending messages to the device over MQTT.

This project is available on <a href="https://github.com/ncarr/esp32-cam-mjpeg-multiclient">GitHub</a>

![Doorbell displaying a user-provided message](../../assets/doorbell_message.jpg)
