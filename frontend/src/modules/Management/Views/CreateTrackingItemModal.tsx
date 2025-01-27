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
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../../../components/FormInputs";
import AddIcon from "@mui/icons-material/Add";
import theme from "../../../utils/theme.tsx";
import { useEffect, useState } from "react";
import { FIELD_TYPES, FIELD_TYPES_NAMES } from "../../../utils/constants.ts";
import { DeleteRounded } from "@mui/icons-material";

interface CreateTrackingItemModalProps {
    open: boolean;
    onClose: () => void;
}

interface TrackingItemField {
    id: string;
    name?: string;
    type?: number;
    deleted?: 0;
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
            deleted: 0,
        });
        TMP_ID++;

        setFields(fieldsCopy);
    };

    const deleteField = (field: TrackingItemField) => {
        const index = fields.findIndex((f) => f.id === field.id);
        if (index >= 0) {
            setFields([...fields.slice(0, index), ...fields.slice(index + 1)]);
            formMethods.setValue(`fields.${field.id}.deleted`, 1);
        }
    };

    const create = (data: FieldValues) => {
        const body = {
            category: data.category,
            description: data.description,
            identifier: data.identifier,
            name: data.name,
            type: data.type,
            fields: data.fields.filter((d: TrackingItemField) => !d.deleted),
        };
        console.log(body);
    };

    useEffect(() => {
        if (!open) {
            formMethods.reset();
            setFields([]);
        } else {
            onAddField();
        }
    }, [open]);

    return (
        <CustomModal open={open} paperSxProps={{ width: "50%" }}>
            <ModalHeader title={"Create new tracking item"}>
                <Button onClick={onClose}>Close</Button>
                <Button onClick={formMethods.handleSubmit(create)}>
                    Create
                </Button>
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
                                        name={`fields.${field.id}.name`}
                                        variant="standard"
                                        required
                                        fullWidth
                                    />
                                    <TextInput
                                        innerLabel="Type"
                                        name={`fields.${field.id}.type`}
                                        variant="standard"
                                        fullWidth
                                        required
                                        select
                                    >
                                        <option
                                            key="empty"
                                            value=""
                                            disabled
                                        ></option>
                                        {Object.entries(FIELD_TYPES).map(
                                            ([key, value]) => (
                                                <option key={key} value={value}>
                                                    {FIELD_TYPES_NAMES[value]}
                                                </option>
                                            ),
                                        )}
                                    </TextInput>
                                    <IconButton
                                        sx={{ paddingBottom: 0 }}
                                        onClick={() => deleteField(field)}
                                    >
                                        <DeleteRounded
                                            sx={{ color: "#e83838" }}
                                        />
                                    </IconButton>
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
