type Options = {
  useIframe: boolean;
  useShadowDom: boolean;
  useShadowDomCSS: boolean;
}

/**
 * PartialOptions is a type that represents an object with
 * the same properties as Options, but all of them are optional.
 */
type PartialOptions = Partial<Options>;
