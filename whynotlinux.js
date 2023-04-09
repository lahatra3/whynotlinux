#!/usr/bin/env node
import chalkAnimation from "chalk-animation";
import figlet from "figlet";

const distributions = [
    "linux",
    "Archlinux",
    "Black archlinux",
    "Manjaro",
    "Debian",
    "Ubuntu",
    "RHEL",
    "Kali linux",
    "CentOS",
    "OpenSuse",
    "Suse",
    "ParrotOS",
  ],
  distributions_length = distributions.length;

const startRainbowLinux = async () => {
    const rainbowLinux = chalkAnimation.rainbow(
      figlet.textSync(`Why  not  ${distributions[0]} ?`)
    );
    return new Promise((resolve) => rainbowLinux.start(() => resolve()));
  },
  startRainbowDistribution = async () => {
    const rainbowDistribution = chalkAnimation.rainbow(
      `Why not ${distributions[0]} ?`
    );
    return new Promise((resolve) => {
      setInterval(() => {
        let index = Math.round(Math.random() * (distributions_length - 1));
        rainbowDistribution.replace(`Why not ${distributions[index]} ?`);
        resolve();
      }, 1331);
    });
  };

(async () =>
  await Promise.all([startRainbowLinux(), startRainbowDistribution()]))();
