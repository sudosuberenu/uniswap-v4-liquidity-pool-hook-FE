import { useState } from "react";
import { AppBar, Box, Button, Tab, Tabs, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import PropTypes from "prop-types";

function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function PositionsTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const handleCashout = (id: number) => {
    console.log(`Cashing out position with id ${id}`);
  };

  const openPositions = [
    {
      id: 1,
      side: "SHORT",
      liquidity: 3800,
      time: "10:42:51",
      txHash: "0x1234567890abcdef",
    },
  ];

  return (
    <Box
      className="text-white hover:outline hover:outline-2 hover:outline-[#50d2c1]"
      sx={{ width: "100%", bgcolor: "#0e1a1e", borderRadius: "5px", p: 2 }}
    >
      <AppBar
        position="static"
        style={{ background: "#1f2a31", borderRadius: "5px 5px 0 0" }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="positions tabs">
          <Tab
            className="text-white active:text-slate-200"
            label="Open Positions"
            sx={{
              "& .Mui-selected": {
                color: "pink",
              },
            }}
          />
          <Tab
            className="text-white hover:text-slate-200"
            label="Closed Positions"
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {openPositions.length === 0 ? (
          <Typography variant="body2" className="text-white">
            No open positions yet
          </Typography>
        ) : (
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="text-left py-2">Side</th>
                <th className="text-left py-2">Liquidity</th>
                <th className="text-left py-2">Time</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {openPositions.map((position) => (
                <tr key={position.id} className="border-t border-gray-700">
                  <td
                    className={`py-2 ${
                      position.side === "LONG"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {position.side}
                  </td>
                  <td className="py-2">{position.liquidity}</td>
                  <td className="py-2">{position.time}</td>
                  <td className="py-2 flex items-baseline">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleCashout(position.id)}
                      style={{
                        color: "black",
                        backgroundColor: "#50d2c1",
                        boxShadow: "none",
                        fontSize: "0.75rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      Cashout
                    </Button>
                    <a
                      href={`https://etherscan.io/tx/${position.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LaunchIcon
                        className="ml-2"
                        sx={{ fontSize: "15px", color: "#50d2c1" }}
                      />
                    </a>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="body2" className="text-white">
          No closed positions yet
        </Typography>
      </TabPanel>
    </Box>
  );
}
