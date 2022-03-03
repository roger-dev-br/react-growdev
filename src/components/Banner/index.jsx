import { Grid } from '@mui/material';
import { GrowdevBanner, GrowdevGrid, GrowdevTexto } from './styled';
import imagemEmail from '../../assets/images/email.svg';

export default function Banner() {
  return (
    <GrowdevBanner container>
      <GrowdevGrid item sm={12} md={6}>
        <GrowdevTexto variant="h2">
          Crie seus projetos de software com a Growdev.
        </GrowdevTexto>
      </GrowdevGrid>
      <Grid item sm={12} md={6}>
        <img src={imagemEmail} alt="Promoção" height={600} />
      </Grid>
    </GrowdevBanner>
  );
}
