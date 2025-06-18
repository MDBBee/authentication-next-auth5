'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { RegisterSchema } from '@/schemas';
import CardWrapper from './card-wrapper';

const RegisterForm = () => {
  return <div>RegisterForm</div>;
};
export default RegisterForm;
