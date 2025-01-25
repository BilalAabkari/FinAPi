import {
    CustomModal,
    ModalContent,
    ModalHeader,
} from "../../../components/Modal";
import {
    Box,
    Button,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../../../components/FormInputs";
import AddIcon from "@mui/icons-material/Add";
import theme from "../../../utils/theme.tsx";
import { useState } from "react";
import { FIELD_TYPES, FIELD_TYPES_NAMES } from "../../../utils/constants.ts";

interface CreateTrackingItemModalProps {
    open: boolean;
    onClose: () => void;
}

interface TrackingItemField {
    id: string;
    name?: string;
    type?: number;
}

let TMP_ID = 0;

const CreateTrackingItemModal = ({
    open,
    onClose,
}: CreateTrackingItemModalProps) => {
    const formMethods = useForm();

    const [fields, setFields] = useState<TrackingItemField[]>([]);

    const onAddField = () => {
        const fieldsCopy = [...fields];

        fieldsCopy.push({
            id: TMP_ID.toString(),
            name: undefined,
            type: undefined,
        });
        TMP_ID++;

        setFields(fieldsCopy);
    };

    return (
        <CustomModal open={open} paperSxProps={{ width: "50%" }}>
            <ModalHeader title={"Create new tracking item"}>
                <Button onClick={onClose}>Close</Button>
            </ModalHeader>
            <ModalContent>
                <Box sx={{ padding: 3 }}>
                    <Typography paddingBottom={3}>
                        Fill the following fields to create a new tracking item:
                    </Typography>
                    <FormProvider {...formMethods}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextInput
                                    innerLabel="Name"
                                    name="name"
                                    fullWidth
                                    required
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextInput
                                    innerLabel="Identifier"
                                    name="identifier"
                                    required
                                    size="small"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextInput
                                    innerLabel="Type"
                                    name="type"
                                    required
                                    size="small"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextInput
                                    innerLabel="Category"
                                    name="category"
                                    required
                                    size="small"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    innerLabel="Description"
                                    name="description"
                                    multiline={true}
                                    required
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Typography paddingTop={3} paddingBottom={2}>
                            Fields
                        </Typography>

                        <Stack spacing={1}>
                            {fields.map((field) => (
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    key={field.id}
                                >
                                    <TextInput
                                        innerLabel="Name"
                                        name={`${field.id}.name`}
                                        variant="standard"
                                        fullWidth
                                    />
                                    <TextInput
                                        innerLabel="Type"
                                        name={`${field.id}.type`}
                                        variant="standard"
                                        fullWidth
                                        select
                                    >
                                        <option key="empty"></option>
                                        {Object.keys(FIELD_TYPES).map(
                                            (fieldType) => (
                                                <option
                                                    key={fieldType}
                                                    value={
                                                        FIELD_TYPES[
                                                            fieldType as keyof typeof FIELD_TYPES
                                                        ]
                                                    }
                                                >
                                                    {
                                                        FIELD_TYPES_NAMES[
                                                            FIELD_TYPES[
                                                                fieldType as keyof typeof FIELD_TYPES
                                                            ]
                                                        ]
                                                    }
                                                </option>
                                            ),
                                        )}
                                    </TextInput>
                                </Stack>
                            ))}
                        </Stack>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <IconButton
                                onClick={onAddField}
                                sx={{
                                    backgroundColor: theme.extraColors.detail,
                                    borderRadius: 2,
                                    color: theme.palette.text.primary,
                                    marginTop: 2,
                                    width: "40%",
                                    "&:hover": {
                                        backgroundColor:
                                            theme.extraColors.lightDetail,
                                    },
                                }}
                            >
                                <AddIcon />
                                <Typography>Add new field</Typography>
                            </IconButton>
                        </Box>
                    </FormProvider>
                </Box>
            </ModalContent>
        </CustomModal>
    );
};

export default CreateTrackingItemModal;
