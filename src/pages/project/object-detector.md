---
layout: ../../layouts/project.astro
title: Object Detector Python
client: Self
githublink: https://github.com/Croustys/LPR_aws_rekog
githublink2: https://github.com/Croustys/tf_object_detector
githublinkname: AWS implementation
githublinkname2: Tensorflow implementation
publishDate: 2022-07-12 00:00:00
img: assets/neural-network.jpg
description: |
  Object Detection Written in Python using Tensorflow & AWS Rekognition
tags:
  - Python
  - Machine-Learning
  - Object-Detector
---

# Initial Plan

The main reason I started this project was that, I was really interested in how parking garages manage traffic, cars by license plate.
The first thing I tried out was writing a simple script in python, using the <span style="background-color: black; color: white; padding: 0.5rem; border-radius: 0.375rem">AWS Rekognition</span> to detect all objects on the given image, then select the bounding box of the detected item with the object-name of `License Plate`. The AWS API responded with the necessary information so that we can draw the bounding boxes around the detected license plates, and after that, we can crop the image using the [Python Imaging Library](https://pillow.readthedocs.io/en/stable/), and right after that we send a request to AWS text detector the response with the correct license plate characters & numbers, which we can work with, later on.

# "Problem"
Since AWS is a paid service, and can often get quite expensive I thought about using a free model and building my own Object Detector to work with in the future

# Solution
I used tensorflow and the coco dataset to use the pretrained models to detect the objects on the given images / videos. The project works on images, videos, and live camera feed as well. However as it is pretrained dataset, it does not contain the License Plate tag. It is able to live detect all objects at a high standard. The pretrained models are changeable & the code downloads it automatically upon changing the name of the model.


