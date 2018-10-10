.PHONY: all
all: gtfoutside.zip

gtfoutside.zip:
	@find ./content.js ./manifest.json -type f -print | zip ./gtfoutside.zip -@

.PHONY: clean
clean:
	rm -f gtfoutside.zip
