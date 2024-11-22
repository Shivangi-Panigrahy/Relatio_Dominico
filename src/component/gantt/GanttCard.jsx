// import React from "react";
// import { Card, CardContent, Typography, Grid } from "@mui/material";

// const data = [
//   { label: "Collaboratori", value: "53" },
//   { label: "Livello di occupazione complessivo", value: "85%" },
//   { label: "Progetti", value: "32" },
//   { label: "Ore pianificate", value: "280" },
//   { label: "Giorni", value: "35" },
// ];

// const GanttCard = () => {
//   return (
//     <Grid container>
//       {data.map((item, index) => (
//         <Grid item sm={6} md={2} key={index}>
//           <Card
//             style={{
//               borderRadius: 12,
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <CardContent>
//               <Typography
//                 variant="body2"
//                 color="#E72276"
//                 style={{ fontWeight: "bold" }}
//               >
//                 {item.label}
//               </Typography>
//               <Typography variant="h5" color="textPrimary">
//                 {item.value}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default GanttCard;

import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const data = [
  { label: "Collaboratori", value: "53" },
  { label: "Livello di occupazione complessivo", value: "85%" },
  { label: "Progetti", value: "32" },
  { label: "Ore pianificate", value: "280" },
  { label: "Giorni", value: "35" },
];

const GanttCard = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      {data.map((item, index) => (
        <Grid item key={index} sx={{ width: 342, mb: 2.25 }}>
          <Card
            sx={{
              width: 342, // Fixed width for the card
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography
                variant="body2"
                color="#E72276"
                sx={{
                  fontFamily: "var(--FontPrimario)",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "16.45px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {item.label}
              </Typography>

              <Typography
                variant="h5"
                color="textPrimary"
                sx={{
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GanttCard;
