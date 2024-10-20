---
sidebar_position: 1
slug: /
---

# Usage

This page will summarize all features related to this shop-browser.

import ReactPlayer from 'react-player'

## Paginated Display

### Page Navigation

Navigate to either the next- or the previous page, or quickly jump to the very first- or last page.

![display pagination](/img/display_pagination.gif)

### Shop Details

A rich preview of details regarding each individual shop, which not only offers actions to either teleport to the destination or open the native preview, but also updates in real time.

![display details](/img/display_details.gif)

### Sorting Results

Create your very own sorting-setup by choosing from an extensive list of criteria; each entry can either be disabled (taking no effect), or be toggled between ascending (+) and descending (-); to decide sorting-precedence, individual entries may be moved. Your choices will be remembered, as to ensure future results being displayed in a personalized manner. You can reset your selection with merely the click of a button at any time!

![display sorting](/img/display_sorting.gif)

### Filtering Results

Filter results based on your exact requirements: criteria combines conditionally, meaning that all selections need to apply to any given shop. Your choices will be remembered, as to ensure future results being displayed in a personalized manner. You can reset your selection with merely the click of a button at any time!

![display filtering](/img/display_filtering.gif)

### Powerful Predicates

Thanks to the feature-rich syntax as provided by the [ItemPredicateParser](https://blvckbytes.github.io/docs-item-predicate-parser), queries can be as simple or as detailed as you desire them to be; the days of having to flip through hundreds of unspecific results are finally over!

![display filtering](/img/command_predicate.gif)

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

Since it's totally reasonable to be concerned with the performance-impact a plugin like this could cause, I want to provide some ballpark measurements and insights into the whole process; after all, it's doing a lot: parsing complex predicates, querying **all global shops**, rendering **customizable** preview items and reflecting shop-changes **immediately** in all open search-windows.

First and foremost, all of the previously mentioned tasks are executed asynchronously. Secondly, all globally existing shops are queried once on startup and then cached, while newly created or removed shops are of course tracked too; this includes caching not only the remaining stock and space (as to avoid needless inventory slot scans), but also takes care of the configurable display item template.

Even complex predicates take only roughly two milliseconds to parse. Where the system really shines is the speed of predicate execution, which - for rather nuanced queries - lies at around 5 nanoseconds per Shop; on a reasonably large server with, for example, 100k shops, a query would take merely half a second.

Rendering a full GUI-page, including page-items and controls, takes around two to two four milliseconds. Over all, I believe that the performance of this plugin is within an acceptable range; if you ever encounter any issues, please report back to me, so that I have further motivation to improve efficiency.