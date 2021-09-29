# What Are Angular Libraries?

An Angular ***library*** is just a module or a collection of things that can be consumed by multiple projects. One of the main reasons that library projects are not used frequently in Angular solutions is that there's not a lot of guidance on what kind of libraries to create and how they can be used in an application.

 > [Wikipedia](https://en.wikipedia.org/wiki/Library_(computing)): A library is also a collection of implementations of behavior, written in terms of a language, that has a well-defined interface by which the behavior is invoked... Library code is organized in such a way that it can be ***used by multiple programs***... The ***value*** of a library lies in the reuse of standardized program elements.

 The value of libraries in Angular is reuse, consistency, maintainability, and extensibility. You can see the value of libraries over time when applications are easy to maintain. Adding new features should be easy and without friction. A library project should simplify and ease the effort to make the developer's job more effective and efficient.

## What's in a Library?

 Typically, a library contains a set of related things. This is a collection or a set of behaviors that some other project may consume. We consume library projects in the form of packages in our Angular projects. For example, when we import an Angular package we are basically using a library that contains a set of related things or behaviors. We can use these packages to compose the behaviors of our application. We do not have to write or develop these packages (or even have access to the source code - [they are already *compiled*/*packaged* and ready for use](https://angular.io/guide/aot-compiler#ahead-of-time-aot-compilation))! 
 
 Other applications can *import* the same packages and use them in different ways for their solution. That is the ***power*** of a library. 

 > Build once, use many.

