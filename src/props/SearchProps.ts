import { ChangeEvent } from "react";
import { Option } from "../types";

export interface SearchProps {
    term: string;
    options: Option[];
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onOptionSelect: (option: Option) => void;
    onSubmit: () => void;
}