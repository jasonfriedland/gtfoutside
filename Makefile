.PHONY: all
all: gtfoutside.zip

gtfoutside.zip:
	@find ./content.js ./manifest.json ./screenshot-1280x800.png -type f -print | zip ./gtfoutside.zip -@

.PHONY: clean
clean:
	rm -f gtfoutside.zip
