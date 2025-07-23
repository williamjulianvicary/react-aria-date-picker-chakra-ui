import "./styles.css";
import { DateRangePicker } from "./DateRangePicker";
import { DatePicker } from "./DatePicker";
import { today, now, getLocalTimeZone } from "@internationalized/date";
import { ChakraProvider, Box, Heading, Link } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <Box marginLeft="12">
        {/* prettier-ignore */}
        <p style={{marginBottom: 40}}>This sandbox shows an example <strong><code>Autocomplete</code></strong> component built with <Link href="https://react-spectrum.adobe.com/react-aria/" rel="noreferrer" target="_blank" color="blue.500">React Aria</Link> and <Link href="https://chakra-ui.com/" rel="noreferrer" target="_blank" color="blue.500">Chakra UI</Link>.</p>
        <Heading size="lg" marginBottom="2">
          DatePicker
        </Heading>
        <DatePicker
          label="Appointment date and time"
          minValue={today(getLocalTimeZone())}
          defaultValue={now(getLocalTimeZone())}
        />
        <Heading size="lg" marginTop="12" marginBottom="2">
          DateRangePicker
        </Heading>
        <DateRangePicker
          label="Date and time range"
          minValue={today(getLocalTimeZone())}
          defaultValue={{
            start: now(getLocalTimeZone()),
            end: now(getLocalTimeZone()).add({ weeks: 1 })
          }}
        />
      </Box>
    </ChakraProvider>
  );
}
