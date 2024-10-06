---
sidebar_position: 1
slug: /
---

# Usage

This page will summarize all features related to this shop-browser.

import ReactPlayer from 'react-player'

## Paginated Display

The display not only serves results page by page, but also allows to apply further restrictions and preferences; these choices are persisted, in order to ensure lasting personalization. I'll let the following tour speak for itself.

<ReactPlayer playing loop controls url='ui_tour.mp4' />

## Commands

Please familiarize yourself with the syntax of predicates over at the [Parser's Documentation](https://blvckbytes.github.io/docs-item-predicate-parser). Results are, if any, offered within a paginated display.

### Main Language

Usage: `/qss <predicate>`

To query all globally existing shops using the configured main language, and thereby without having to specify an additional, use `/quickshopsearch` or its alias `/qss`, followed up by an optional predicate.

### Custom Language

Usage: `/qssl <language> <predicate>`

To query all globally existing shops using any of the languages supported by the predicate-parser, use `/quickshopsearchlanguage` or its alias `/qssl`, followed up by the language, followed up by a predicate.

### Reload Configuration

Usage: `/qssrl`

The configuration can be reloaded at any point in time, simply by running `/quickshopsearchreload` or its alias `/qssrl`; this also affects open displays and will update the inventory-title as well as all rendered items.

## Permissions

- `quickshopsearch.command.qss`: Invoke the main command
- `quickshopsearch.command.qssl`: Invoke the language command
- `quickshopsearch.command.qssrl`: Invoke the reload command
- `quickshopsearch.empty-predicate`: Query all shops without a predicate
- `quickshopsearch.feature.sort`: Use the sorting feature
- `quickshopsearch.feature.filter`: Use the filtering feature
- `quickshopsearch.feature.teleport`: Teleport to shops within the same world
- `quickshopsearch.feature.teleport.other-world`: Teleport to shops within another world

## Performance Concerns

Since it's totally reasonable to be concerned with the performance-impact a plugin like this could cause, I want to provide some ballpark measurements and insights into the whole process; after all, it's doing a lot: parsing complex predicates, querying **all global shops** and rendering **customizable** preview items.

First and foremost, all of the previously mentioned tasks are executed asynchronously. Secondly, all globally existing shops are queried once on startup and then cached, while newly created or removed shops are of course tracked too; this includes caching not only the remaining stock (as to avoid needless inventory slot scans), but also takes care of the configurable display item template.

Complex predicates take around four to five milliseconds to parse; there's still room for improvement. Where the system shines is the speed of predicate execution, which - for rather complex queries - lies at around 5 nanoseconds per Shop; on a reasonably large server with, for example, 100k shops, a query would take merely half a second.

Rendering a GUI-page, as can be seen in the tour, including page-items and controls, takes around two to two four. Over all, I believe that the performance of this plugin is within an acceptable range; if you ever encounter any issues, please report back to me, so that I have further motivation to improve efficiency.