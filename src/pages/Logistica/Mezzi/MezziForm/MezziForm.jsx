import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../../../component/form/CustomInput";
import { Box, Button, Grid, Typography, InputAdornment, TextField, FormControlLabel } from "@mui/material";
import CustomSelect from "../../../../component/form/CustomSelect";
import { validationSchema3 } from "../../../../validation/ValidationSchema";
import "./Form.scss";
import CustomCheckbox from "../../../../component/table/Checkbox";
import { ReactComponent as Mese } from "../../../../assets/Mese.svg";

const selectOptions = [
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];

const inputFields = [
    {
        name: "Nome del mezzo",
        label: "Nome del mezzo",
    },
    { name: "Categoria mezzo", label: "Categoria mezzo" },
    { name: "Targa", label: "Targa" },
    { name: "Targa rimorchio", label: "Targa rimorchio" },
    { name: "Costo orario", label: "Costo orario" },
    { name: "Stabilimento", label: "Stabilimento" },
    { name: "Centri di ricavo/Costo", label: "Centri di ricavo/Costo" },
    { name: "Note", label: "Note" },
];


const MezziForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema3),
    });

    const onSubmit = (data) => console.log(data);

    const [activeIndex, setActiveIndex] = useState(0); // Track the active index

    const handleClick = (index) => {
        setActiveIndex(index); // Set the active index when a list item is clicked
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="formCard">
            <div className="headerBlock">
                <h5 className="headerBlock__title">Mezzo</h5>
            </div>
            {inputFields.slice(0, 1).map((field) => (
                <CustomInput
                    key={field.name}
                    control={control}
                    name={field.name}
                    label={field.label}
                    error={errors[field.name]}
                />
            ))}

            <Grid style={{ marginBottom: "14px" }}>
                <CustomSelect
                    control={control}
                    name="Categoria mezzo"
                    label="Categoria mezzo"
                    error={errors.Categoria?.message}
                    options={selectOptions}
                />
            </Grid>

            {inputFields.slice(2, 5).map((field) => (
                <CustomInput
                    key={field.name}
                    control={control}
                    name={field.name}
                    label={field.label}
                    error={errors[field.name]}
                />
            ))}
            <Grid style={{ marginBottom: "14px" }}>
                <CustomSelect
                    control={control}
                    name="Stabilimento"
                    label="Stabilimento"
                    error={errors.Stabilimento?.message}
                    options={selectOptions}
                />
            </Grid>
            <Grid style={{ marginBottom: "14px" }}>
                <CustomSelect
                    control={control}
                    name="Centri"
                    label="Centri"
                    error={errors.Centri?.message}
                    options={selectOptions}
                />
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Controller
                        name="Note"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Note"
                                multiline
                                rows={4}
                                fullWidth
                                error={!!errors.Note}
                                helperText={errors.Note?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>

        </form>
    );
};


export default MezziForm;
