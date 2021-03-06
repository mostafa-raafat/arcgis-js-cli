/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/* eslint spaced-comment:0 */
/* global expect, test, jest */
import init from "../commands/init";

jest.mock("../lib/downloadAsync");
jest.mock("../lib/installer");
jest.mock("path");
jest.mock("fs.promised");
jest.mock("ora");
jest.mock("inquirer");

test("Init command has correct options", () => {
  const { type } = init.builder;
  expect(type).toBeDefined();
  expect(type.default).toEqual("jsapi");
});

test("Init handler succeeds for default app", async () => {
  const argv = {
    type: "jsapi"
  };
  try {
    let result = await init.handler(argv);
    expect(result).not.toBeDefined();
  } catch (error) {
    expect(error.message).toEqual(1);
  }
});

test("Init handler succeeds for template", async () => {
  const argv = {
    type: "template"
  };
  try {
    let result = await init.handler(argv);
    expect(result).not.toBeDefined();
  } catch (error) {
    expect(error.message).toEqual(1);
  }
});

test("Init handler fails for unknown template", async () => {
  const argv = {
    type: "jerry"
  };
  try {
    let result = await init.handler(argv);
    expect(result).not.toBeDefined();
  } catch (error) {
    expect(error.message).toEqual(`Unknown app template "${argv.type}.`);
  }
});
