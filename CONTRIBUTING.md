# Contributing to Website

Thank you for your interest in participating!

There are many ways to contribute, beyond writing code or programming, by: logging bugs, reporting issues, and creating suggestions. To do so, please [create a ticket](https://github.com/shabados/website/issues/new) in our issue tracker. See other ways to [Contribute](README.md#Contributing) or give [Feedback](README.md#Feedback).

This document is for developers or programmers contributing to the source code of Website.

**Table of Contents**

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Build](#build)
  - [Start](#start)
- [Workflow](#workflow)
  - [Coding Guidelines](#coding-guidelines)
  - [Scope](#scope)
- [Thank you](#thank-you)

## Getting Started

If you wish to better understand how Website works or want to debug an issue: get the source, build it, and run it locally.

### Prerequisites

In order to download necessary tools, clone the repository, and install dependencies, you'll need network access.

You'll need the following:

- [Git](https://git-scm.com/)
- [Node.JS](https://nodejs.org) (If you need to manage multiple Node.JS versions, [use a node version manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install)

Get the source code of `website` repo:

```shell
gh repo fork shabados/website --clone=true
```

**PROTIP**: Use the [`gh` cli tool from GitHub](https://cli.github.com/) to fork the repo to your GitHub account (if not already), clone it to your local machine, and set the appropriate remotes for origin and upstream with the above command.

### Build

Run `npm i` in the root directory.

### Start

```shell
npm start
```

## Workflow

The workflow of development (or Git Flow) is to [choose/create an issue](https://github.com/shabados/website/issues) to work on, [create a feature branch](https://github.com/shabados/.github/wiki/How-to-Contribute#branches), and [submit a pull request](https://github.com/shabados/.github/wiki/How-to-Contribute#pull-requests).

**PROTIP**: Read more about our workflow (issue tracking, branching, and pull requests) in the [How To Contribute wiki article](https://github.com/shabados/.github/wiki/How-to-Contribute).

### Coding Guidelines

Please see the [wiki](https://github.com/shabados/.github/wiki/How-to-Contribute#coding-guidelines) for Coding Guidelines ([Names](https://github.com/shabados/.github/wiki/How-to-Contribute#41-names), [Comments](https://github.com/shabados/.github/wiki/How-to-Contribute#42-comments), [Style](https://github.com/shabados/.github/wiki/How-to-Contribute#43-style), [Linting](https://github.com/shabados/.github/wiki/How-to-Contribute#44-linting), and [Commit Messages](https://github.com/shabados/.github/wiki/How-to-Contribute#45-commit-messages)).

### Scope

To be used in [commit messages](https://github.com/shabados/.github/wiki/How-to-Contribute#45-commit-messages).

Usage:

```shell
<type>(<scope>): <subject>
```

There are no scopes for `website`.

## Thank you

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to participate in this project.
