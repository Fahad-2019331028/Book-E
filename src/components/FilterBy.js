import { useCallback } from "react";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./FilterBy.module.css";
const FilterBy = ({ onClose }) => {
  const navigate = useNavigate();

  const onFilterButtonClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className={styles.filterBy}>
      <div className={styles.option}>Option</div>
      <Select
        variant="outline"
        w="196px"
        size="sm"
        name="sort_by"
        id="sort_by"
        placeholder="Genre"
        textColor="#48ff05"
        backgroundColor="rgba(24, 65, 18, 0.43)"
        borderColor="#124211"
        focusBorderColor="#0d881a"
      >
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Fiction">Fiction</option>
        <option value="Thriller">Thriller</option>
        <option value="Science Fiction">Science Fiction</option>
      </Select>
      <Select
        variant="outline"
        w="196px"
        size="sm"
        name="sort_by"
        id="sort_by"
        placeholder="Book Type"
        textColor="#48ff05"
        backgroundColor="rgba(24, 65, 18, 0.43)"
        borderColor="#124211"
        focusBorderColor="#0d881a"
      >
        <option value="Price High to Low">Price High to Low</option>
        <option value="Giveaway">Giveaway</option>
        <option value="Loan">Loan</option>
      </Select>
      <Select
        variant="outline"
        w="196px"
        size="sm"
        name="sort_by"
        id="sort_by"
        placeholder="Sort by"
        textColor="#48ff05"
        backgroundColor="rgba(24, 65, 18, 0.43)"
        borderColor="#124211"
        focusBorderColor="#0d881a"
      >
        <option value="A to Z">A to Z</option>
        <option value="Z to A">Z to A</option>
      </Select>
      <button className={styles.filterButton} onClick={onFilterButtonClick}>
        <div className={styles.filter}>Filter</div>
      </button>
    </div>
  );
};

export default FilterBy;
