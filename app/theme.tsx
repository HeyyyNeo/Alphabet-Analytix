import { ThemeProvider } from "next-themes";

const WithThemeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default WithThemeLayout;
