import { theme } from '../../../theme/theme';
import { Box, Text } from '../../../theme/components';

export default function Footer() {
  return (
    <Box
      as="footer"
      styleSheet={{
        backgroundColor: theme.colors.neutral[900]
      }}
    >
      <Box
        styleSheet={{
          overflow:"hidden",
          maxWidth: theme.space.xcontainer_xl,
          marginLeft: "auto",
          marginRight:"auto",
          marginBottom:"auto",
          paddingVertical:{
            xs: theme.space.x12,
          },
          paddingHorizontal:{
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
        }}
      >
        <Text
          as="p"
          styleSheet={{
            textVariant: theme.typography.variants.body3,
            textAlign: "center",
            color: theme.colors.neutral[400],
          }}
        >
          &copy; 2022 Panificadora Santa Clara. Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  )
}
//https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json 