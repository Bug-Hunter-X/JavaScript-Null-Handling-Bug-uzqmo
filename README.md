# JavaScript Null Handling Bug

This repository demonstrates a common yet subtle bug in JavaScript related to null value handling. The `foo` function intends to add two numbers, but it fails gracefully when provided with null values. This might not always be the ideal behavior.  The solution explores alternative approaches to handle nulls, offering more flexible behavior.

## Bug

The original `foo` function immediately returns null if either `a` or `b` is null. This is simple but might not suit all scenarios. Sometimes, you might want to treat null as 0, throw an error, or use a default value.

## Solution

The solution demonstrates ways to handle null values more robustly.  These include using default values (e.g., treating null as 0) or throwing exceptions for unexpected null input.