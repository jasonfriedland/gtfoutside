.PHONY: all
all: gtfoutside.zip

gtfoutside.zip:
	@find . -path '*/.*' -prune -o -path './Makefile' -prune -o -type f -print | zip ./gtfoutside.zip -@

.PHONY: clean
clean:
	rm -f gtfoutside.zip
