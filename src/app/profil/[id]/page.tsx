// Profil pouzivatela

// src/app/profil/[id]/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: 'Detail profilu | ZoskaSnap'}

export default function ProfileDetail() {

  return(
    <Container>
      <Typography> Detail profilu </Typography>
    </Container>
  );
}