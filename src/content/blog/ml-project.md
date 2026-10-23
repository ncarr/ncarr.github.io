---
title: Autonomous Parking Enforcement Competition
pubDate: 2022-03-27
summary: Autonomous robot controller to drive around a track reading license plates using ROS
tags: [project]
cardImage: ../../assets/parking.png
cardImageAlt: Raw camera image and corresponding debug image
blogHighlight: false
projectHighlight: true
startDate: 2021-09-01
endDate: 2021-12-01
---

I wrote an autonomous robot controller in Python using the ROS framework to drive around a track and record license plates from parked cars in a Gazebo simulation for a course competition. The controller consisted of a single ROS node that processed each frame from the camera in simulation using OpenCV. The controller uses Keras and TensorFlow to perform character recognition on the license plates. Line following was done using PID control using the location of the road markings from OpenCV.

Most of the robot controller code is dedicated to a classical computer vision pipeline that produces consistent input images for the neural network. The controller performs semantic segmentation on the input image using the cv2.inRange() function to create masks containing pixels that match the colour of desired objects in the image. These masks are shown in the right half of the figure below. Contours are then drawn over solid regions of the masks, and license plates are then perspective transformed to a 100x50 pixel image and the mask of the license plate text is sent to the neural network.

The convolutional neural network that processes license plate images was trained on 800 generated images of license plates. In practice, this network is sufficiently reliable that it did not need to be trained on images extracted from the simulation, and no data augmentation was required.
