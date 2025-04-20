---
sidebar_position: 3
---

# Configuration

The configuration and all of its translation-inputs can be found in the folder called `QuickShopSearch/config`; see the [ConfigMapper's Documentation](https://blvckbytes.github.io/docs-config-mapper) for more detail.

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

:::note
This feature has not yet been implemented in any official release and the following documentation merely represents a design-reference for the time being.
:::

All configuration-options regarding distance-based fees can be found under the root-level key called `fees`; to enable or disable this feature in its entirety, toggle `enabled` to `true` or `false`.

![fees enabled](/img/configuration_fees_enabled.png)

### Per World Distance-Ranges

To allow for high flexibility fee configuration, distance-ranges are scoped per world-name; there are two keys, namely `default`, which is used as a fallback for all worlds which are not explicitly specified, and `worlds`, which maps world-names to distance-ranges.

![fees enabled](/img/configuration_fees_per_world.png)

### Distance-Range Entry

Keys within a distance-ranges section (under `default` or world-name) are always integers greater than zero, ordered in an ascending manner, strictly incrementing. If the first key is `10` and the second `20`, that implies the first range being `[0;10]` and the second range being `[11;20]`, as the start of the very first range is always zero, and the start of any follow-up ranges are the end of their predecessors, plus one. Let's see an example.

![fees enabled](/img/configuration_fees_intervals.png)

### Permission-Names

Within ranges, namely under the integer distance key, fees are scoped per permission-name, just like they are with worlds, to enable you to have varying fees for different users and or groups. Again, the `default` key acts as a fallback for when the user does not satisfy any permission-name, while names can be explicitly stated in the `names`-section. The layout of resulting permissions is as follows: `quickshopsearch.fees.distance-range.<name>`; the same name may be used across multiple worlds.

![fees enabled](/img/configuration_fees_per_permission_name.png)

### Fee Percentages, Priority and Hiding

Within permission-names, or within the `default` fallback, fee-percentages may be specified for buying (`buy`) and selling (`sell`) as a floating-point value in the range `[0;1]`. These names represent underlying permissions, which the player may or may not have, from which directly follows that a player could have access to multiple fee-percentages simultaneously, most likely due to the standard concept of group permission inheritance; while you could (and may should) block distance-range permissions from trickling down, an optional value called `priority` has been introduced: the highest priority to which the player has access to will be chosen, whenever multiple candidates exist.

The `priority` has to be a strictly positive integer. There is no need to ever specify a priority on the `default`-fallback, as it will never conflict with named ranges. Beware! If no priority has been specified, the first match (from top to bottom) will be selected - this is clearly defined and expected behavior.

![fees enabled](/img/configuration_fees_percentages_and_priority.png)

In the example above, if a player only has permission to `nameA`, it will be chosen; the same holds true for only having access to `nameB`; for both `nameA` and `nameB`, `nameB` will be chosen, in contrast to the case of `nameA` winning out if there were no priority-values, simply due to it being defined first.

In order to hide shops falling into a certain range of distances, within a certain world, within a certain named permission (or default), simply set `hidden` to `true`; these shops will not be rendered in the shop-browser.

![fees enabled](/img/configuration_fees_hidden.png)

### Full Example

Below you can find a textual full use example, with explanatory comments, containing all possible keys and cases.

```yaml
fees:
  # Enable distance-based fees
  enabled: true
  distanceRanges:
    # Fallback for when no world-name matches on 'worlds'
    default:
      10: # Distance in [0;10]
        # Fallback for when the player has no access to any named range
        default:
          buy: 0
          sell: 0
        # Named ranges, each corresponding to a separate permission
        names:
          # quickshopsearch.fees.distance-range.nameA
          nameA:
            priority: 1
            buy: 0
            sell: 0
          # quickshopsearch.fees.distance-range.nameB
          nameB:
            # If access to both nameA and nameB, nameB will win
            priority: 2
            buy: 0
            sell: 0
          # quickshopsearch.fees.distance-range.nameC
      20: # Distance in [11;20]
        default:
          # Hide all shops with a distance greater than 20 for players
          # who do not have access to any named ranges
          hidden: true
        # Structure equivalent to 10
    # Distance-ranges per world-name (ignores casing)
    worlds:
      # World named 'skyblock'
      skyblock:
        # Structure equivalent to distanceRanges.default
      # World named 'oneblock'
      oneblock:
        # Structure equivalent to distanceRanges.default
```