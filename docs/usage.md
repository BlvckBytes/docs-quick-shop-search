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

### Remote Interaction

Interact with shops from any arbitrary distance, be it within the same world, or even across worlds! The requests to sell and buy items will be relayed to the shop and handled natively, thereby ensuring proper transactional consistency.

![display remote interact](/img/display_remote_interact.gif)

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

### Advertise Command

Usage: `/qs advertise`

Toggles the is-advertising state of the shop currently looked at, indicating whether it'll show up on the shop-browser. By default, no shop is advertising, as it's an opt-in choice. These states are simply stored on the shop-sign's [PersistentDataContainer](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/persistence/PersistentDataContainer.html) as a single byte, being either `0` or `1`. There exists a bypass-permission for admins, so they can still view all globally existing shops - see the permissions-section of this page.

### Reload Configuration

Usage: `/qssrl`

The configuration can be reloaded at any point in time, simply by running `/quickshopsearchreload` or its alias `/qssrl`; this also affects open displays and will update the inventory-title as well as all rendered items.

## Permissions

- `quickshopsearch.command.qss`: Invoke the main command
- `quickshopsearch.command.qssl`: Invoke the language command
- `quickshopsearch.command.qssrl`: Invoke the reload command
- `quickshopsearch.empty-predicate`: Query all shops without a predicate
- `quickshopsearch.other-world`: Whether to display shops which are not in the same world as the player
- `quickshopsearch.feature.sort`: Use the sorting feature
- `quickshopsearch.feature.filter`: Use the filtering feature
- `quickshopsearch.feature.teleport`: Teleport to shops within the same world
- `quickshopsearch.feature.teleport.other-world`: Teleport to shops within another world
- `quickshopsearch.feature.interact`: Remotely interact with shops within the same world
- `quickshopsearch.feature.interact.other-world`: Remotely interact with shops within another world
- `quickshopsearch.access-list.<suffix>`: Control access-lists by permission, see [Access-Lists](./configuration.md#access-lists)
- `quickshopsearch.bypass-access-lists`: Bypass all access-lists, see [Access-Lists](./configuration.md#access-lists)
- `quickshopsearch.command.advertise`: Invoke the toggle-advertise sub-command of quickshop.
- `quickshopsearch.command.advertise.owner-bypass`: Invoke the toggle-advertise command for shops you're not the owner of.
- `quickshopsearch.bypass-non-advertise`: View all shops, no matter whether they're advertising.

## Performance Concerns

Since it's totally reasonable to be concerned with the performance-impact a plugin like this could cause, I want to provide some ballpark measurements and insights into the whole process; after all, it's doing a lot: parsing complex predicates, querying **all global shops**, rendering **customizable** preview items and reflecting shop-changes **immediately** in all open search-windows.

First and foremost, all of the previously mentioned tasks are executed asynchronously. Secondly, all globally existing shops are queried once on startup and then cached, while newly created or removed shops are of course tracked too; this includes caching not only the remaining stock and space (as to avoid needless inventory slot scans), but also takes care of the configurable display item template.

Even complex predicates take only roughly two milliseconds to parse. Where the system really shines is the speed of predicate execution, which - for rather nuanced queries - lies at around 5 nanoseconds per Shop; on a reasonably large server with, for example, 100k shops, a query would take merely half a second.

Rendering a full GUI-page, including page-items and controls, takes around two to two four milliseconds. Over all, I believe that the performance of this plugin is within an acceptable range; if you ever encounter any issues, please report back to me, so that I have further motivation to improve efficiency.