import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { Alert } from './routes/alert'
import Introduction from "./routes/introduction";
import Button from "./routes/button";
import Typography from "./routes/typography";
import Notification from "./routes/notification";
import Table from "./routes/table";
import Input from "./routes/input";
import Select from "./routes/select";
import Textarea from "./routes/textarea";
import Checkbox from "./routes/checkbox";
import { DesignSystemLayout } from "./layout";

export const ComponentsApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<DesignSystemLayout />}>
          <Route path="introduction" element={<Introduction />} />
          <Route path="button" element={<Button />} />
          <Route path="typography" element={<Typography />} />
          <Route path="notification" element={<Notification />} />
          <Route path="table" element={<Table />} />
          <Route path="input" element={<Input />} />
          <Route path="select" element={<Select />} />
          <Route path="textarea" element={<Textarea />} />
          <Route path="checkbox" element={<Checkbox />} />
        </Route>
        <Route path="/*" element={<Navigate to="" />} />

      </Routes>
    </BrowserRouter>
  );
};
