# EMOJICDN

## Basic usage

Append any emoji to the end of `emojicdn.elk.sh` to get a PNG image:

```
<img src="https://emojicdn.elk.sh/🥳" />
```

## Emoji style

For more control, add the `style` query parameter to specify an emoji platform: 

```
<img src="https://emojicdn.elk.sh/🥳?style=google" />
```

If no `style` is provided, the API defaults to `apple`. 

Supported styles: 

* `apple`
* `google`
* `microsoft`
* `samsung`
* `whatsapp`
* `twitter`
* `facebook`
* `joypixels`
* `openmoji`
* `emojidex`
* `messenger`
* `lg`
* `htc`
* `mozilla`