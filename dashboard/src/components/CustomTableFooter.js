import {
  Box,
  IconButton,
  TableFooter,
  TablePagination,
  TableRow,
  useTheme
} from "@mui/material";
import {
  FirstPage,
  LastPage,
  KeyboardArrowRight,
  KeyboardArrowLeft
} from "@mui/icons-material";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, pr: 4, flexGrow: 1, width: "100%" }}>
      <IconButton
        sx={{ color: "white", "&.Mui-disabled": { color: "#666" } }}
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        sx={{ color: "white", "&.Mui-disabled": { color: "#666" } }}
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        sx={{ color: "white", "&.Mui-disabled": { color: "#666" } }}
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        sx={{ color: "white", "&.Mui-disabled": { color: "#666" } }}
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPage /> : <LastPage />}
      </IconButton>
    </Box>
  );
}

const CustomTableFooter = ({
  rows,
  handleChangePage,
  rowsPerPage,
  page,
  handleChangeRowsPerPage
}) => {
  return (
    <TableFooter>
      <TableRow
        sx={{
          width: "100%",
          "& *": {
            overflow: "hidden",
            alignItems: "center",
            flexWrap: { xs: "wrap", md: "nowrap" }
          }
        }}
      >
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={3}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page"
            },
            sx: { color: "white" },
            native: false
          }}
          sx={{ color: "white" }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
};

export default CustomTableFooter;
