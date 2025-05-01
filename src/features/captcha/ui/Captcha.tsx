import { useEffect, useState } from "react"
import CircularProgress from "@mui/material/CircularProgress"
import styles from "@/features/auth/ui/Login/Login.module.css"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import { useGetCaptchaQuery } from "@/features/captcha/api/captchaApi.ts"

type Props = {
  refetchCaptcha: boolean
} & TextFieldProps

export const Captcha = ({ refetchCaptcha, ...rest }: Props) => {
  const [fetchCaptcha, setFetchCaptcha] = useState(true)

  const { data, isFetching, refetch } = useGetCaptchaQuery()

  useEffect(() => {
    if (data?.url) {
      setFetchCaptcha(false)
    }
  }, [isFetching])

  useEffect(() => {
    refetch()
  }, [refetchCaptcha])
  return (
    <>
      {fetchCaptcha ? (
        <CircularProgress size={100} thickness={3} />
      ) : (
        <img src={data?.url} alt="captcha" className={styles.captcha_img} />
      )}
      <TextField {...rest} />
    </>
  )
}
