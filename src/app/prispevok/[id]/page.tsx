// Detail konkretneho prispevku

// src/app/prispevok/[id]/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: 'Detail prispevku | ZoskaSnap'}

export default function PostDetail() {

  return(
    <Container>
      <Typography> Detail prispevkov </Typography>
    </Container>
  );
}