import type React from "react";

import { InputAdornment, Input as InputMui, Typography } from "@mui/material";

import type { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
	error,
	helperText,
	type,
	placeholder,
	startAdornment,
	sx,
}) => {
	return (
		<>
			<InputMui
				error={error}
				sx={sx}
				placeholder={placeholder}
				fullWidth
				type={type}
				startAdornment={startAdornment}
				endAdornment={
					<InputAdornment position="end">
						{error && (
							<Typography color="primary.main" variant="caption">
								{helperText}
							</Typography>
						)}
					</InputAdornment>
				}
			/>
		</>
	);
};

export default Input;
