#!/usr/bin/env node
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
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
  distributionsLength = distributions.length;

const startRainbowLinux = async () => {
    const rainbowLinux = chalkAnimation.rainbow(
      figlet.textSync(`Why  not  ${distributions[0]} ?`)
    );
    return new Promise(resolve => rainbowLinux.start(() => resolve()));
  },
  displayDate = async () => {
    const position = "\n=============>>> ESTI Antanimena, Samedi 29 Avril 2023 <<<=============\n";
    return new Promise(resolve => {
      console.log(chalk.hex('#008080').bold(position));
      resolve();
    });
  },
  startRainbowDistribution = async () => {
    const rainbowDistribution = chalkAnimation.rainbow(
      `\t\t\tWhy not ${distributions[0]} ?`
    );
    return new Promise((resolve) => {
      setInterval(() => {
        let index = Math.round(Math.random() * (distributionsLength - 1));
        rainbowDistribution.replace(`\t\t\tWhy not ${distributions[index]} ?`);
        resolve();
      }, 1331);
    });
  };

(async () =>
  await Promise.race([startRainbowLinux(), displayDate(), startRainbowDistribution()]))();
