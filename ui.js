"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const TextInput = require("ink-text-input").default;
const wcc = require("world-countries-capitals");

const App = () => {
	const [country, setCountry] = React.useState("");
	const [capital, setCapital] = React.useState("");
	const [currency, setCurrency] = React.useState("");
	const [phone, setPhone] = React.useState("");

	React.useEffect(() => {
		const getCountry = wcc.getCountryDetailsByName(country);
		setCapital(getCountry[0].capital);
		setCurrency(getCountry[0].currency);
		setPhone(getCountry[0].phone_code);
	});

	return (
		<Box flexDirection="column">
			<Box borderStyle="round" borderColor="green">
				<Text>Welcome to Country CLI</Text>
			</Box>
			<Box>
				<TextInput
					placeholder="Enter a country..."
					value={country}
					onChange={setCountry}
				/>
			</Box>

			<Box flexDirection="column" width={80} borderStyle="single">
				<Box>
					<Box width="40%">
						<Text>Country Code</Text>
					</Box>

					<Box width="40%">
						<Text>Capital City</Text>
					</Box>

					<Box width="40%">
						<Text>Currency</Text>
					</Box>
				</Box>
				<Box>
					<Box width="40%">
						<Text>{phone}</Text>
					</Box>

					<Box width="40%">
						<Text>{capital}</Text>
					</Box>

					<Box width="40%">
						<Text>{currency}</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

module.exports = App;
