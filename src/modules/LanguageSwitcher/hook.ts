import { dashboardActions, dashboardSelectors } from "@modules/layouts/Dashboard";
import { LanguageType } from "@modules/layouts/Dashboard/types";
import { useDispatch, useSelector } from "react-redux";

const useContainer = () => {
  const language = useSelector(dashboardSelectors.languageSelector);

  const isUKLanguage = language === LanguageType.UK;

  const dispatch = useDispatch();
  
    const handleChangeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        dispatch(dashboardActions.setUKLanguage());
      } else {
        dispatch(dashboardActions.setENLanguage());
      }
    };

  return {isUKLanguage, handleChangeLanguage};
};

export default useContainer;