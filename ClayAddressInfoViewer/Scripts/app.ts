/// <reference path="typings/bootstrap/index.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />



"use strict"

export function CreateLabel(): HTMLLabelElement
{
  let label: HTMLLabelElement = (<HTMLLabelElement>document.createElement("label"));
  return label;
}

export function CreateHeading(): HTMLHeadingElement
{
  let heading: HTMLHeadingElement = (<HTMLHeadingElement>document.createElement("h2"));


  return heading;
}

export function CreateSubHeading(): HTMLHeadingElement
{
  let subheading: HTMLHeadingElement = (<HTMLHeadingElement>document.createElement("h4"));


  return subheading;
}

export function CreateUnorderedList(): HTMLUListElement
{
  let ulist: HTMLUListElement = (<HTMLUListElement>document.createElement("ul"));


  return ulist;
}

export function CreateUnorderdedListItem(): HTMLLIElement
{
  let litem: HTMLLIElement = (<HTMLLIElement>document.createElement("li"));


  return null;
}



