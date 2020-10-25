# UXPin Merge - Example Wrapping Web Components

This is an example React app that wraps [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) for use with [UXPin Merge](uxpin.com/merge).

## Structure

* Web components are in `src/web_components`.
* Merge-wrappers and presets are in `src/web_components/merge`. These use the same naming as their base web components.

## Setup

* Clone this repo
* npm install
* uxpin-merge (starts experiment mode)

## React Wrapper

The inspiration for this approach comes from the blog post [_How to use Web Components in React_](https://www.robinwieruch.de/react-web-components). There are two requirements for wrapping a web component with React:

1. formatting objects and arrays to JSON
2. registering functions as event listeners

The above requirements are accomplished via the [use-custom-element](https://github.com/the-road-to-learn-react/use-custom-element) package.
