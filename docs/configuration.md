---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Configuration

The configuration and all of its translation-inputs can be found in the folder called `QuickShopSearch/config`; see the [ConfigMapper's Documentation](https://blvckbytes.github.io/docs-config-mapper) for more detail.

:::note
There are quite a few lines in my configuration-files, as I value flexibility; many usually represent preprocessor-directives as to substitute in language file keys. If you're in search of specific settings, feel free to look them up via your editor's search-feature and simply skip over what you do not need.
:::

:::tip
If you try to delete a key and it is automatically extended back into the config-file by the plugin, try commenting it out instead; the software then should detect your intent and refrain from updating the corresponding property again.
:::

## Teleport-Cooldowns

To avoid users spamming teleportation, or in some cases, restricting the convenience of travelling back-and-forth as to carry huge amounts, cooldowns have been introduced. They differentiate between "same shop" and "any shop", where any applies to all teleportations, and "same" applies to shops which have been teleported to already, as it may be required to set another duration regarding travelling back to a recent shop, in contrast to visiting a new place. On top of this, the second differentiation lies in whether the shop is within the player's current-, or a foreign, other world; thus, four potential cooldowns arise. If you do not need some (or all, for that matter) of them, simply set them to a value of zero.

```yml
# Specify the cooldown-duration in seconds
cooldowns:
  teleportToShop:
    default:
      sameShop: 30
      anyShop: 20
      otherWorldSameShop: 60
      otherWorldAnyShop: 40
```

If you desire to alter the cooldown of players on a permission-basis (e.g. ranks), use the group-section, which is processed top-down when trying to resolve applicable time-values for any given user.

```yml
# Specify the cooldown-duration in seconds
cooldowns:
  teleportToShop:
    default:
      sameShop: 30
      anyShop: 20
      otherWorldSameShop: 60
      otherWorldAnyShop: 40
    groups:
      # Hand out quickshopsearch.teleport-cooldown.test to permit these values
      test:
        sameShop: 10
        anyShop: 5
        otherWorldSameShop: 15
        otherWorldAnyShop: 10
```

## Slow-Teleport

Especially on servers which rely on combat as being part of their concept, instantaneous teleportation without any additional checks may be a dealbreaker; for this exact reason, slow teleportation - meaning only moving the player after a countdown elapsed successfully - has been introduced.

The corresponding section offers quite a lot of flexibility, enabling the user to configure various durations, messages, sounds, and also to differentiate between slowly teleporting in normal- vs. in combat-situations; if you do not seek to differentiate, simply configure the two options identically.

The defaults have been kept rather sensible and should not require much work in most real-world scenarios. Also notice the corresponding bypass-permission as listed on the main page of this documentation.

```yml
# Countdowns before teleporting
slowTeleport:
  # Cancel the countdown if damaged by another player - no  matter if directly or via a projectile
  cancelIfDamagedByPlayer: true
  # Cancel the countdown if the player experiences damage by non-player sources, like cacti, drowning, fire, etc.
  cancelIfDamagedByNonPlayer: false
  # Duration in seconds for the player to be marked as "in combat" since they've last been damaged by somebody else
  combatLogCoolOffDurationSeconds: 10
  # How to act when the player's considered being in combat, as dictated by the cool-off duration above
  whenInCombat:
    # Countdown duration
    # Set to zero as to disable this part of the feature; also works for `whenNotInCombat`
    durationSeconds: 5
    # Notification properties used when there's a null-value set to a seconds-value in `notificationAtSeconds` down below
    # This way, common messages and sounds can be lifted out, saving on needless repitition
    fallbackNotification:
      # One of https://github.com/CryptoMorin/XSeries/blob/master/core/src/main/java/com/cryptomorin/xseries/XSound.java
      sound: 'BLOCK_NOTE_BLOCK_PLING'
      # - remaining_seconds: Integer
      messages:
        messageTitle: '...'
        messageSubTitle: '...'
        # Leave messages as null-values for them to be disabled
        messageActionBar: null
        messageChat: null
    # At which points in time to notify the player?
    notificationAtSeconds:
      # Set to null in order to use the `fallbackNotification`
      5: null
      4: null
      3: null
      2: null
      1: null
      # Exception from the fallback - differing sound and a chat-message instead of a title
      0:
        sound: 'BLOCK_NOTE_BLOCK_PLING'
        # Make the last pling be of higher pitch and loudness
        soundVolume: 1.1
        soundPitch: 1.2
        messages:
          messageChat: '...'
  # Completely analogous to the `whenInCombat`-section; can be copied down 1:1
  whenNotInCombat:
```

## PlayerWarps Integration

As requested, instead of being teleported to the selected shop, one can now also be teleported to the nearest player-warp, as defined by the `com.olziedev`'s `PlayerWarps` plugin or `dev.revivalo`'s free alternative. The system checks neighboring chunks within the configured range of blocks for player-warps and chooses the one with least distance.

```yml
playerWarpsIntegration:
  enabled: true
  nearestWarpBlockRadius: 15
  # Whether to display the lore-line regarding the nearest player-warp on
  # the representative icon in the browser
  displayNearestInIcon: false
  # Only used if there exist no update notifiers within the warps-plugin at hand
  # Set to a negative number as to disable updating altogether
  updatePeriodSeconds: 30
  # Whether player-warps may only be corresponded if they're within the
  # same region as the shop itself
  withinSameRegion: false
```

## Essentials Warps Integration

The functionality of this integration is analogous to that of player-warps.

```yml
essentialsWarpsIntegration:
  enabled: true
  nearestWarpBlockRadius: 15
  # Whether to display the lore-line regarding the nearest player-warp on
  # the representative icon in the browser
  displayNearestInIcon: false
  # Whether essentials-warps may only be corresponded if they're within the
  # same region as the shop itself
  withinSameRegion: false
```

## WorldGuard Integration

This integration allows the plugin to fetch the applicable regions of any given point within the world and thereby support further constraints and features.

```yml
worldGuardIntegration:
  enabled: true
  # Regions with these IDs will be skipped over
  # Example: A big market-place region does not count for being in the same region, while
  #          smaller individual shop-regions do; thus, add the former to the ignore-list
  ignoredIds: ["my-region-1", "my-region-2"]
  # Regions with these priority-numbers will be skipped over
  ignoredPriorities: [1, 5]
```

## Access-Lists

In order to control which shops may be accessed by users, access-lists have been introduced; they are located under the key `"shopAccessLists"` in the configuration-file.

Since different players may have access to a different set of shops, these lists are scoped by permission-suffixes in the form of `quickshopsearch.access-list.<suffix>`, with `<suffix>` being the key under which an access-list registers in the config, under the key `permissions`, right next to `default`; they are checked in the same order as specified, and the first matching permission-node will be taken as an input when filtering results for any given player.

:::tip
Beware of permission-inheritance with groups; either specify access-lists in reverse order of group-inheritance, or block access-list permissions from trickling down, as to avoid undesired behavior.
:::

If a player does not satisfy any of the permission-checks, the `default`-section will be employed. In the case that you do not want to differentiate by permissions, simply only specify a default. Access-lists can be bypassed altogether by the permission `quickshopsearch.bypass-access-lists`.

The list `types` represents a list of item-types, as defined in [XMaterial](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java), as to support a broader range of versions. The flag `isAllowTypes` represents the access-mode, with `true` signalling that only the specified types are allowed, but none other than these, and with `false` meaning that only the specified types are disallowed, and all but these are allowed.

```yaml
shopAccessLists:
  # Used when no permission-suffix matched on the player
  default:
    # Allow only the following
    isAllowTypes: true
    types:
      - DIAMOND_PICKAXE
      - IRON_SWORD
  permissions:
    # quickshopsearch.access-list.suffix-a
    suffix-a:
      # Disallow only the following
      isAllowTypes: false
      types:
        - GOLDEN_PICKAXE
        - WOODEN_SWORD
    # quickshopsearch.access-list.suffix-b
    suffix-b:
      # Disallow only the following
      isAllowTypes: false
      types:
        - WOODEN_PICKAXE
        - GOLDEN_SWORD
```

## Distance-Based Fees

All configuration-options regarding distance-based fees can be found under the root-level key called `fees`; to enable or disable this feature in its entirety, toggle `enabled` to `true` or `false`. When faced with the task of formulating your desired behaviour using the notation presented below, try to think about the resolution algorithm, as follows:

<img src={useBaseUrl('/img/fees_flowchart.svg')} style={{width: '100%', maxWidth: '600px', backgroundColor: '#e7e7e7ff', padding: '1rem', borderRadius: '.3rem', marginBottom: '1rem'}} />

:::tip
If you're looking to implement distance-agnostic fees, or even a world-agnostic version for that matter, simply leave out the corresponding explicit sections and rely on their fallbacks! :)
:::

The following full example demonstrates all available properties; similar schemas are simply mentioned by an indented comment, as to increase readability.

```yml
fees:
  enabled: true
  # Fees are withdrawn from the user before trying to initiate remote interaction
  # Once withdrawn, the timeout starts ticking - if it elapses, the fees are payed back
  # What cancels said timeout then is a payment success response from QuickShop-Hikari
  # 40 ticks is the default value and represents a span of two seconds
  # Do not touch this key unless you know exactly what you're doing!
  feesPayBackTimeoutTicks: 40
  # Applied when the shop is located in another world than the player currently resides in
  otherWorld:
    # Fallback fees to use when no world-name applies
    worldsFallback:
      # Buy/Sell refers to the action the player's taking.

      # Absolute fees are simply added/taken in a static manner, not taking
      # the actual price into account; they are clamped as to not produce
      # negative values, though. Deleting the keys is equal to a zero-value.
      # Fees are always specified as positive numbers.
      absoluteBuy: 0
      absoluteSell: 0
      # Relative fees are a value from 0 to 100 and are interpreted as a
      # percentage of the actual price at hand. Deleting the keys is
      # equal to a zero-value. Fees are always specified as positive numbers.
      relativeBuy: 0
      relativeSell: 0
      # Only relevant when it comes to permissions - due to inheritance,
      # a user might have access to multiple fees. The highest number of
      # all accessible sections is selected as the final result.
      priority: 0
    # Separate fees per world-name
    worlds:
      world-one:
        # Schema of fees.otherWorld.worldsFallback
      world-two:
        # Schema of fees.otherWorld.worldsFallback

  # All sections from this point onwards are referring to same-world shops

  # Fallback fees to use when no world-name applies
  worldsFallback:
    # Fallback range to use when no existing range applies
    distanceRangesFallback:
      # Fallback fees to use when no permission-name applies
      permissionNamesFallback:
        # Schema of fees.otherWorld.worldsFallback
      # Fees by permission-names
      # Pattern: quickshopsearch.feature.fees.permission-name.<name>
      permissionNames:
        first-permission:
          # Schema of fees.otherWorld.worldsFallback
        second-permission:
          # Schema of fees.otherWorld.worldsFallback
    distanceRanges:
      -
        minDistance: 0
        maxDistance: 0
        # Fallback fees to use when no permission-name applies
        permissionNamesFallback:
          # Schema of fees.otherWorld.worldsFallback
        # Fees by permission-names
        # Pattern quickshopsearch.feature.fees.permission-name.<name>
        permissionNames:
          first-permission:
            # Schema of fees.otherWorld.worldsFallback
          second-permission:
            # Schema of fees.otherWorld.worldsFallback
  # Separate distance-ranges per world-name
  worlds:
    world-one:
      # Schema of fees.worldsFallback
    world-two:
      # Schema of fees.worldsFallback
```