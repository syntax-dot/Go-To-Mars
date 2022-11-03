export enum Corners {
    TL = 0b1000,
    TR = 0b0100,
    BL = 0b0010,
    BR = 0b0001,
    TL_BR = TL | BR,
    BL_TR = BL | TR,
    ALL = TL_BR | BL_TR
}
