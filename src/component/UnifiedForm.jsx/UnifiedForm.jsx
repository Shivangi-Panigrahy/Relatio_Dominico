import React from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Button,
    Box,
    InputAdornment,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styles from './UnifiedForm.scss'; // You'll need to merge scss files or create a new one

const DynamicCard = ({ title, fields, showArrowIcon = false }) => (
    <div>
        <Card className={styles.card}>
            <CardHeader
                className={styles['card-header']}
                title={title}
                titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent>
                <Grid container spacing={2}>
                    {fields.map((field, index) => (
                        <Grid item xs={12} key={index}>
                            <TextField
                                className={styles['text-field']}
                                fullWidth
                                label={field.label}
                                type={field.type || 'text'}
                                variant="outlined"
                                InputProps={{
                                    endAdornment: showArrowIcon || 
                                    ['Nome della banca di accredito', 'Nome della banca del cliente', 'Pagamento', 'Tipologia di pagamento', 'Settore', 'Categoria categoria azienda'].includes(field.label) ? (
                                        <InputAdornment position="end">
                                            <ArrowDownwardIcon />
                                        </InputAdornment>
                                    ) : null,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <Button
                startIcon={<AddIcon />}
                sx={{ 
                    color: 'text.secondary',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'text.primary',
                    }
                }}
            >
                Aggiungi
            </Button>
        </Box>
    </div>
);

const UnifiedForm = ({ activeSection = 'datiFinanziari' }) => {
    const sectionConfigs = {
        datiFinanziari: {
            cards: [
                {
                    title: 'Conto bancario',
                    fields: [
                        { label: 'Nome della banca di accredito' },
                        { label: 'Nome conto' },
                        { label: 'IBAN' },
                        { label: 'SWIFT' },
                    ],
                },
                {
                    title: 'Metodo',
                    fields: [
                        { label: 'Modalita di pagamento' },
                        { label: 'Esenzione IVA' },
                        { label: 'Nome della banca del cliente' },
                        { label: 'IBAN' },
                        { label: 'Nome conto' },
                        { label: 'SWIFT' },
                    ],
                },
                {
                    title: 'Condizioni',
                    fields: [
                        { label: 'Pagamento' },
                        { label: 'Tipologia di pagamento' },
                    ],
                },
            ]
        },
        qualificazione: {
            cards: [
                {
                    title: 'Tipo di azienda',
                    fields: [
                        { label: 'Settore' },
                        { label: 'Categoria categoria azienda' },
                        { label: 'Codice adeco' },
                    ],
                },
                {
                    title: 'Attivita',
                    fields: [
                        { label: 'Progettazione e edirezione lavori' },
                        { label: 'Prove geioteniche' },
                        { label: 'Rilievi topografici' },
                        { label: 'Pratiche catastali' },
                    ],
                },
                {
                    title: 'Attivita',
                    fields: [
                        { label: 'Progettazione e direzione lavori' },
                        { label: 'Progettazine ubanistica' },
                        { label: 'Progettazine strutturale' },
                        { label: 'Progettazine architettonica' },
                    ],
                },
            ]
        },
        contatti: {
            cards: [
                {
                    title: 'Contatti azienda',
                    fields: [
                        { label: 'Numero Fisso' },
                        { label: 'Numero Mobile' },
                        { label: 'Email', type: 'email' },
                        { label: 'Sito' },
                        { label: 'Pagina LinkedIn' },
                    ],
                },
                {
                    title: 'Contatti Referente 1',
                    fields: [
                        { label: 'Nome e Cognome referente' },
                        { label: 'Tipo di referente' },
                        { label: 'Cellulare' },
                        { label: 'Numero Mobile' },
                        { label: 'Email', type: 'email' },
                        { label: 'Contatto LinkedIn' },
                    ],
                },
                {
                    title: 'Contatti Referente 2',
                    fields: [
                        { label: 'Nome e Cognome referente' },
                        { label: 'Tipo di referente' },
                        { label: 'Cellulare' },
                        { label: 'Numero Mobile' },
                        { label: 'Email', type: 'email' },
                        { label: 'Contatto LinkedIn' },
                    ],
                },
            ]
        }
    };

    const { cards } = sectionConfigs[activeSection];

    return (
        <Container className={styles.container} maxWidth="xl">
            <Grid container spacing={3}>
                {cards.map((card, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <DynamicCard 
                            title={card.title} 
                            fields={card.fields} 
                            showArrowIcon={activeSection !== 'contatti'} 
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default UnifiedForm;