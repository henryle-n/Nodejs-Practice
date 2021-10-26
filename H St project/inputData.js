// Range of each fluid type
// WBDF06 :: 1.16 - 1.20 sg
// OBDF05 :: 11 - 16 inches
 
exports.data = [
    {
    // case 1: WBDF06 :: 1.16 sg
    sectionDiameter: 20,
    density: 1.16,
    fluidName: "WBDF06"   
    },
    {
    // case 2: WBDF06 :: 1.16 < 1.18 < 1.20 sg
    sectionDiameter: 20,
    density: 1.18,
    fluidName: "WBDF06"    
    },
    {
    // case 3: OBDF05 :: 11 in (lower border)
    sectionDiameter: 11,
    density: 1.3,
    fluidName: "OBDF05"    
    },
    {
    // case 4: OBDF05 :: 16 in (higher border)
    sectionDiameter: 16,
    density: 1.2,
    fluidName: "OBDF05"    
    },
    {
    // case 5: OBDF05 :: 14 in (within the range)
    sectionDiameter: 14,
    density: 1.1,
    fluidName: "OBDF05"    
    }
]
