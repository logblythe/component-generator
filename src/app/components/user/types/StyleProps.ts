export type StyleProps = {
  //font props
  fontSize?: number;
  fontWeight?: number; // TODO: this should accept only possible font-weight values. Currently, it accepts anything.
  textAlign?: string; //TODO: this should only support possible text-align values. Currently, it accepts anything.

  textColor?: string; // TODO: this should accept only possible color values. Currently, it accepts anything.
  backgroundColor?: string; // TODO: this should accept only possible color values. Currently, it accepts anything.

  //padding props
  padding?: string[];

  //margin props
  margin?: string[];

  //border props
  borderRadius?: string;
  borderColor?: string; // TODO: this should accept only possible color values. Currently, it accepts anything.

  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  boxShadow: number;
};
