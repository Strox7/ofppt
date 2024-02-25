import * as React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { Button } from "@mui/base/Button";
import { Popper } from "@mui/base/Popper";
import { styled } from "@mui/system";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearIcon from "@mui/icons-material/Clear";

const Autocomplete = React.forwardRef(function Autocomplete(props, ref) {
  const [selectedValue, setSelectedValue] = React.useState(null);
  const {
    onSelectCity,
    disableClearable = false,
    disabled = false,
    readOnly = false,
    ...other
  } = props;

  const {
    getRootProps,
    getInputProps,
    getPopupIndicatorProps,
    getClearProps,
    getListboxProps,
    getOptionProps,
    dirty,
    id,
    popupOpen,
    focused,
    anchorEl,
    setAnchorEl,
    groupedOptions,
  } = useAutocomplete({
    ...props,
    componentName: "BaseAutocompleteIntroduction",
    onSelectCity,
  });

  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;

  const rootRef = useForkRef(ref, setAnchorEl);
  const handleSelect = (option) => {
    setSelectedValue(option);
    onSelectCity(option);
  };

  return (
    <React.Fragment>
      <StyledAutocompleteRoot
        {...getRootProps(other)}
        ref={rootRef}
        className={focused ? "focused" : undefined}
      >
        <StyledInput
          placeholder="City"
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          {...getInputProps()}
          value={selectedValue ? selectedValue.label : ""}
        />
        {hasClearIcon && (
          <StyledClearIndicator {...getClearProps()}>
            <ClearIcon />
          </StyledClearIndicator>
        )}

        <StyledPopupIndicator
          {...getPopupIndicatorProps()}
          className={popupOpen ? "popupOpen" : undefined}
        >
          <ArrowDropDownIcon />
        </StyledPopupIndicator>
      </StyledAutocompleteRoot>
      {anchorEl ? (
        <Popper
          open={popupOpen}
          anchorEl={anchorEl}
          slots={{
            root: StyledPopper,
          }}
          modifiers={[
            { name: "flip", enabled: false },
            { name: "preventOverflow", enabled: false },
          ]}
        >
          <StyledListbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => {
              const optionProps = getOptionProps({ option, index });

              return (
                <StyledOption
                  {...optionProps}
                  onClick={() => handleSelect(option)}
                >
                  {option.label.toUpperCase()}
                </StyledOption>
              );
            })}

            {groupedOptions.length === 0 && (
              <StyledNoOptions>No results</StyledNoOptions>
            )}
          </StyledListbox>
        </Popper>
      ) : null}
    </React.Fragment>
  );
});

Autocomplete.propTypes = {
  // onSelectCity: PropTypes.func.isRequired,
  disableClearable: PropTypes.oneOf([false]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

Autocomplete.propTypes = {
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: PropTypes.oneOf([false]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: PropTypes.bool,
};

export default function AutocompleteIntroduction({ onSelectCity }) {
  return <Autocomplete onSelectCity={onSelectCity} options={Cities} />;
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledAutocompleteRoot = styled("div")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;

  color: white;
  background: transparent;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };
  border-radius: 10px;
  display: flex;
  gap: 5px;
  padding-right: 5px;
  overflow: hidden;
  width: 320px;
  

  &.focused {
    
  }

  &:hover {
    background: transparent;
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus-visible {
    outline: 0;
  }
`
);

const StyledInput = styled("input")(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background: transparent;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  
  outline: 0;
  flex: 1 0 auto;

  
`
);

// ComponentPageTabs has z-index: 1000
const StyledPopper = styled("div")`
  position: relative;
  z-index: 1001;
  width: 320px;
  background: "#0f1928";
`;

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 10px;
  margin: 12px 0;
  
  
  min-width: 320px;
  
  overflow: auto;
  outline: 0px;
  max-height: 300px;
  z-index: 1;
  background: white;
  // border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: black;
  border-radius: 10px;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.3)" : "rgba(0,0,0, 0.05)"
  };
  `
);

const StyledOption = styled("li")(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    cursor: pointer;
  }

  &[aria-selected=true] {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.Mui-focused,
  &.Mui-focusVisible {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.Mui-focusVisible {
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  &[aria-selected=true].Mui-focused,
  &[aria-selected=true].Mui-focusVisible {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }
  `
);

const StyledPopupIndicator = styled(Button)(
  ({ theme }) => `
    outline: 0;
    box-shadow: none;
    border: 0;
    border-radius: 4px;
    background-color: transparent;
    align-self: center;
    padding: 0 2px;

    &:hover {
      color: #1976d2;
      cursor: pointer;
    }

    & > svg {
      transform: translateY(2px);
    }

    &.popupOpen > svg {
      transform: translateY(2px) rotate(180deg);
    }
  `
);

const StyledClearIndicator = styled(Button)(
  ({ theme }) => `
    outline: 0;
    box-shadow: none;
    border: 0;
    border-radius: 4px;
    background-color: transparent;
    align-self: center;
    padding: 0 2px;

    &:hover {
      color: #1976d2;
      cursor: pointer;
    }

    & > svg {
      transform: translateY(2px) scale(0.9);
    }
  `
);

StyledClearIndicator.defaultProps = {
  ...StyledClearIndicator.defaultProps,
  as: "div", // This is to make sure the styled component accepts div as the default component
};

const StyledNoOptions = styled("li")`
  list-style: none;
  padding: 8px;
  cursor: default;
`;

const Cities = [
  { label: "El Kelaa des Srarhna " },
  { label: "Casablanca" },
  { label: "Fès" },
  { label: "Tangier" },
  { label: "Marrakech" },
  { label: "Sale" },
  { label: "Mediouna" },
  { label: "Rabat" },
  { label: "Meknès" },
  { label: "Oujda-Angad" },
  { label: "Kenitra" },
  { label: "Agadir" },
  { label: "Tétouan" },
  { label: "Taourirt" },
  { label: "Temara" },
  { label: "Safi" },
  { label: "Khénifra" },
  { label: "Laâyoune" },
  { label: "Mohammedia" },
  { label: "Kouribga" },
  { label: "El Jadid" },
  { label: "Béni Mellal" },
  { label: "Ait Melloul" },
  { label: "Nador" },
  { label: "Taza" },
  { label: "Settat" },
  { label: "Barrechid" },
  { label: "Al Khmissat" },
  { label: "Inezgane" },
  { label: "Ksar El Kebir" },
  { label: "Larache" },
  { label: "Guelmim" },
  { label: "Berkane" },
  { label: "Khemis Sahel" },
  { label: "Ad Dakhla" },
  { label: "Bouskoura" },
  { label: "Al Fqih Ben Çalah" },
  { label: "Oued Zem" },
  { label: "Sidi Slimane" },
  { label: "Errachidia" },
  { label: "Guercif" },
  { label: "Oulad Teïma" },
  { label: "Ben Guerir" },
  { label: "Sefrou" },
  { label: "Fnidq" },
  { label: "Sidi Qacem" },
  { label: "Moulay Abdallah" },
  { label: "Youssoufia" },
  { label: "Martil" },
  { label: "Aïn Harrouda" },
  { label: "Skhirate" },
  { label: "Ouezzane" },
  { label: "Sidi Yahya Zaer" },
  { label: "Al Hoceïma" },
  { label: "M’diq" },
  { label: "Sidi Bennour" },
  { label: "Midalt" },
  { label: "Azrou" },
  { label: "My Drarga" },
  { label: "Ain El Aouda" },
  { label: "Beni Yakhlef" },
  { label: "Ad Darwa" },
  { label: "Al Aaroui" },
  { label: "Qasbat Tadla" },
  { label: "Boujad" },
  { label: "Jerada" },
  { label: "Mrirt" },
  { label: "El Aïoun" },
  { label: "Azemmour" },
  { label: "Temsia" },
  { label: "Zagora" },
  { label: "Ait Ourir" },
  { label: "Aziylal" },
  { label: "Sidi Yahia El Gharb" },
  { label: "Biougra" },
  { label: "Zaïo" },
  { label: "Aguelmous" },
  { label: "El Hajeb" },
  { label: "Zeghanghane" },
  { label: "Imzouren" },
  { label: "Tit Mellil" },
  { label: "Mechraa Bel Ksiri" },
  { label: "Al ’Attawia" },
  { label: "Demnat" },
  { label: "Arfoud" },
  { label: "Tameslouht" },
  { label: "Bou Arfa" },
  { label: "Sidi Smai’il" },
  { label: "Souk et Tnine Jorf el Mellah" },
  { label: "Mehdya" },
  { label: "Aïn Taoujdat" },
  { label: "Chichaoua" },
  { label: "Tahla" },
  { label: "Oulad Yaïch" },
  { label: "Moulay Bousselham" },
  { label: "Iheddadene" },
  { label: "Missour" },
  { label: "Zawyat ech Cheïkh" },
  { label: "Bouknadel" },
  { label: "Oulad Tayeb" },
  { label: "Oulad Barhil" },
];
